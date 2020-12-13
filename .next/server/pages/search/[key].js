module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/search/[key].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PastCard/index.js":
/*!**************************************!*\
  !*** ./components/PastCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/PastCard/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/PastCard/index.js";



const PastCard = props => {
  const {
    0: date,
    1: setDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const today = new Date(props.date);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setDate(today.toLocaleDateString("en-US"));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: "recent missions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Figure"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.image || "/images/escudo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Name"], {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      children: props.detail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Info"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Bullet"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "date:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Bullet"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "flight number:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 14
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.number
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Bullet"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "succes:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 14
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.succes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PastCard);

/***/ }),

/***/ "./components/PastCard/styles.js":
/*!***************************************!*\
  !*** ./components/PastCard/styles.js ***!
  \***************************************/
/*! exports provided: Section, Title, Figure, Name, Text, Info, Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "styles__Section",
  componentId: "sc-1ltfs9r-0"
})(["margin-bottom:40px;border:1px solid ", ";text-align:center;width:100%;@media (min-width:768px){width:48%;}"], ({
  theme
}) => theme.text);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1ltfs9r-1"
})(["background-color:", ";color:", ";padding:30px 0;font-size:36px;text-transform:uppercase;font-weight:600;margin:0;"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.body);
const Figure = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure.withConfig({
  displayName: "styles__Figure",
  componentId: "sc-1ltfs9r-2"
})(["max-width:228px;max-height:218px;height:100%;margin:0 auto;margin-top:30px;margin-bottom:30px;& img{height:100%;object-fit:cover;}"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "styles__Name",
  componentId: "sc-1ltfs9r-3"
})(["font-size:24px;margin-top:30px;margin-bottom:30px;text-transform:uppercase;padding:0 20px;margin:0;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1ltfs9r-4"
})(["padding:20px 20px;text-align:justify;padding-bottom:30px;margin:0;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Info",
  componentId: "sc-1ltfs9r-5"
})(["padding:0 20px;padding-bottom:20px;display:flex;justify-content:space-between;"]);
const Bullet = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Bullet",
  componentId: "sc-1ltfs9r-6"
})(["& p{margin:0;text-align:center;font-size:12px;padding:0 10px;}& span{text-transform:uppercase;}@media (min-width:768px){& p{font-size:14px;}}@media (min-width:992px){& p{font-size:18px;}}"]);

/***/ }),

/***/ "./pages/search/[key].js":
/*!*******************************!*\
  !*** ./pages/search/[key].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getFilterLaunches */ "./services/getFilterLaunches.js");
/* harmony import */ var _components_PastCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PastCard */ "./components/PastCard/index.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/pages/search/[key].js";





const Result = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: launches,
    1: setlaunches
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    docs: []
  });
  const {
    0: result,
    1: setresult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: keyword,
    1: setkeyword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.query.key);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__["default"])(keyword).then(data => {
      setlaunches(data);
    });
  }, [keyword]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setresult(launches.docs);
    setkeyword(router.query.key);
  }, [launches]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "result",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "result-title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: " results for:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), " ", keyword]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "resultContainer",
      children: !result.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "notFound",
        children: "Not found results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 30
      }, undefined) : result.map((item, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PastCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.succes ? "succes" : "fail"
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./services/getFilterLaunches.js":
/*!***************************************!*\
  !*** ./services/getFilterLaunches.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllLaunches; });
async function getAllLaunches(keyword) {
  const API = `https://api.spacexdata.com/v4/launches/query`,
        params = {
    method: "POST",
    body: JSON.stringify({
      query: {
        $text: {
          $search: keyword || ''
        }
      },
      options: {
        sort: {
          date_utc: "desc"
        }
      }
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };
  let response = await fetch(API, params);
  let data = await response.json();
  return data;
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXN0Q2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bhc3RDYXJkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2gvW2tleV0uanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2V0RmlsdGVyTGF1bmNoZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiUGFzdENhcmQiLCJwcm9wcyIsImRhdGUiLCJzZXREYXRlIiwidXNlU3RhdGUiLCJvcHRpb25zIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsInRvZGF5IiwiRGF0ZSIsInVzZUVmZmVjdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImltYWdlIiwidGl0bGUiLCJkZXRhaWwiLCJudW1iZXIiLCJzdWNjZXMiLCJTZWN0aW9uIiwic3R5bGVkIiwiYXJ0aWNsZSIsInRoZW1lIiwidGV4dCIsIlRpdGxlIiwiaDIiLCJib2R5IiwiRmlndXJlIiwiZmlndXJlIiwiTmFtZSIsImgzIiwiVGV4dCIsInAiLCJJbmZvIiwiZGl2IiwiQnVsbGV0IiwiUmVzdWx0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsImRvY3MiLCJyZXN1bHQiLCJzZXRyZXN1bHQiLCJrZXl3b3JkIiwic2V0a2V5d29yZCIsInF1ZXJ5Iiwia2V5IiwiZ2V0RmlsdGVyTGF1bmNoZXMiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJkZXRhaWxzIiwibGlua3MiLCJwYXRjaCIsInNtYWxsIiwiZmxpZ2h0X251bWJlciIsImRhdGVfbG9jYWwiLCJpZCIsImdldEFsbExhdW5jaGVzIiwiQVBJIiwicGFyYW1zIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIiR0ZXh0IiwiJHNlYXJjaCIsInNvcnQiLCJkYXRlX3V0YyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBRTFCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFdBQU8s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O0FBQ1BrRSxZQUFJLEVBQUU7QUFDSkMsa0JBQVEsRUFBRTtBQUROO0FBREM7QUFOVSxLQUFmLENBRkM7QUFjUEMsV0FBTyxFQUFFLElBQUlDLE9BQUosQ0FBWTtBQUNuQixzQkFBZ0I7QUFERyxLQUFaO0FBZEYsR0FEWDtBQW9CQSxNQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDWixHQUFELEVBQU1DLE1BQU4sQ0FBMUI7QUFDQSxNQUFJZixJQUFJLEdBQUcsTUFBTXlCLFFBQVEsQ0FBQ0UsSUFBVCxFQUFqQjtBQUNBLFNBQU8zQixJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN4QkQsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2VhcmNoL1trZXldLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZWFyY2gvW2tleV0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2VjdGlvbiwgVGl0bGUsIEZpZ3VyZSxOYW1lLFRleHQsSW5mbyxCdWxsZXR9IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBQYXN0Q2FyZCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9O1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHByb3BzLmRhdGUpO1xuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERhdGUodG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIikpO1xuICB9LFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPFRpdGxlPnJlY2VudCBtaXNzaW9uczwvVGl0bGU+XG4gICAgICA8RmlndXJlPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2UgfHwgXCIvaW1hZ2VzL2VzY3Vkby5wbmdcIn0gLz5cbiAgICAgIDwvRmlndXJlPlxuICAgICAgPE5hbWU+e3Byb3BzLnRpdGxlfTwvTmFtZT5cbiAgICAgIDxUZXh0Pntwcm9wcy5kZXRhaWx9PC9UZXh0PlxuICAgICAgPEluZm8+XG4gICAgICAgIDxCdWxsZXQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5kYXRlOjwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+e2RhdGV9PC9wPlxuICAgICAgICA8L0J1bGxldD5cbiAgICAgICAgPEJ1bGxldD5cbiAgICAgICAgICA8cD48c3Bhbj5mbGlnaHQgbnVtYmVyOjwvc3Bhbj48L3A+XG4gICAgICAgICAgPHA+e3Byb3BzLm51bWJlcn08L3A+XG4gICAgICAgIDwvQnVsbGV0PlxuICAgICAgICA8QnVsbGV0PlxuICAgICAgICAgIDxwPjxzcGFuPnN1Y2Nlczo8L3NwYW4+PC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5zdWNjZXN9PC9wPlxuICAgICAgICA8L0J1bGxldD5cbiAgICAgIDwvSW5mbz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0Q2FyZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5hcnRpY2xlYFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogNDglO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgcGFkZGluZzogMzBweCAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbmA7XG5leHBvcnQgY29uc3QgRmlndXJlID0gc3R5bGVkLmZpZ3VyZWBcbiAgbWF4LXdpZHRoOjIyOHB4O1xuICBtYXgtaGVpZ2h0OjIxOHB4O1xuICBoZWlnaHQ6MTAwJTtcbiAgbWFyZ2luOjAgYXV0bztcbiAgbWFyZ2luLXRvcDozMHB4O1xuICBtYXJnaW4tYm90dG9tOjMwcHg7XG4gICYgaW1ne1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOjI0cHg7XG4gIG1hcmdpbi10b3A6MzBweDtcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gIHBhZGRpbmc6MCAyMHB4O1xuICBtYXJnaW46MDtcbmA7XG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxucGFkZGluZzoyMHB4IDIwcHg7XG50ZXh0LWFsaWduOmp1c3RpZnk7XG5wYWRkaW5nLWJvdHRvbTozMHB4O1xuICBtYXJnaW46MDtcbmA7XG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6MCAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuYDtcbmV4cG9ydCBjb25zdCBCdWxsZXQgPSBzdHlsZWQuZGl2YFxuICAmIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgcGFkZGluZzowIDEwcHg7XG4gIH1cbiAgJiBzcGFue1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAmIHAge1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAmIHAge1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBnZXRGaWx0ZXJMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0RmlsdGVyTGF1bmNoZXNcIjtcbmltcG9ydCBQYXN0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXN0Q2FyZFwiO1xuXG5jb25zdCBSZXN1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbGF1bmNoZXMsIHNldGxhdW5jaGVzXSA9IHVzZVN0YXRlKHtkb2NzOltdfSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldHJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRrZXl3b3JkXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5rZXkpO1xuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldEZpbHRlckxhdW5jaGVzKGtleXdvcmQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBzZXRsYXVuY2hlcyhkYXRhKTtcbiAgfSk7XG4gIFxufSwgW2tleXdvcmRdKTtcblxuXG5cbnVzZUVmZmVjdCgoKT0+e1xuICBzZXRyZXN1bHQobGF1bmNoZXMuZG9jcylcbiAgc2V0a2V5d29yZChyb3V0ZXIucXVlcnkua2V5KVxufSxbbGF1bmNoZXNdKVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdC10aXRsZVwiPlxuICAgICAgICA8c3Bhbj4gcmVzdWx0cyBmb3I6PC9zcGFuPiB7a2V5d29yZH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0Q29udGFpbmVyXCI+XG4gICAgICBcbiAgICAgICAgeyFyZXN1bHQubGVuZ3RoID4gMD8gPHAgY2xhc3NOYW1lPVwibm90Rm91bmRcIj5Ob3QgZm91bmQgcmVzdWx0czwvcD4gOiByZXN1bHQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFzdENhcmRcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICBkZXRhaWw9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGVfbG9jYWx9XG4gICAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXMgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTGF1bmNoZXMoa2V5d29yZCkge1xuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvbGF1bmNoZXMvcXVlcnlgLFxuICAgIHBhcmFtcyA9IHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgJHRleHQ6IHtcbiAgICAgICAgICAgICRzZWFyY2g6IGtleXdvcmQgfHwgJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICAgIGRhdGVfdXRjOiBcImRlc2NcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSksXG4gICAgfTtcblxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUEksIHBhcmFtcyk7XG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9