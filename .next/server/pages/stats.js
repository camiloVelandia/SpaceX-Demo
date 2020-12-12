module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/stats/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Banner/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/Banner/index.js";



const Banner = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    backImage: props.backImage,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: [" ", props.title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Banner/styles.js":
/*!*************************************!*\
  !*** ./components/Banner/styles.js ***!
  \*************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__Section",
  componentId: "sc-15opjre-0"
})(["height:40vh;margin-top:90px;display:flex;justify-content:center;align-items:center;background-image:url(", ");background-position:center;background-size:cover;background-repeat:no-repeat;position:relative;&::after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:0;}& h1{z-index:1;font-size:48px;text-transform:uppercase;color:white;}"], props => props.backImage || "/images/rocket.jpg");

/***/ }),

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js";







const GridStats = () => {
  const {
    0: dragonInfo,
    1: setdragonInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: succes,
    1: setsucces
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: fail,
    1: setfail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: customer,
    1: setcustomer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: customerName,
    1: setcustomerName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: customerLaunches,
    1: setcustomerLaunches
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // bring the data for launch stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_3__["default"])().then(data => {
      setdragonInfo(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const succeslaunch = dragonInfo.filter(item => {
      return !item.success;
    });
    const faillaunch = dragonInfo.filter(item => {
      return item.success;
    });
    setsucces(succeslaunch.length);
    setfail(faillaunch.length);
  }, [dragonInfo]);
  const dataSucces = {
    labels: ["FAIL", "SUCCESS"],
    datasets: [{
      label: "# of Votes",
      data: [fail, succes],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  }; // bring the data for customer stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_4__["default"])().then(data => {
      setcustomer(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const name = customer.map(item => {
      return item.customers[0];
    });
    let unicos = Array.from(new Set(name));
    let first = unicos.slice(0, 5);
    setcustomerName(first);
  }, [customer]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const result = [];

    for (let i = 0; i < customerName.length; i++) {
      let element = customer.filter(item => {
        const total = item.customers.includes(customerName[i]);
        return total;
      });
      result.push(element.length);
    }

    setcustomerLaunches(result);
  }, [customerName]);
  const dataCustomer = {
    labels: customerName,
    datasets: [{
      data: customerLaunches,
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GridStats);

/***/ }),

/***/ "./components/GridStats/styles.js":
/*!****************************************!*\
  !*** ./components/GridStats/styles.js ***!
  \****************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Grid",
  componentId: "sc-1ya7n3a-0"
})(["width:80%;margin:0 auto;margin-top:60px;margin-bottom:40px;display:flex;flex-wrap:wrap;justify-content:space-between;& > section{width:100%;@media (min-width:768px){width:48%;}}"]);

/***/ }),

/***/ "./components/HistoryLaunch/index.js":
/*!*******************************************!*\
  !*** ./components/HistoryLaunch/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/HistoryLaunch/styles.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_getRocketInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getRocketInfo */ "./services/getRocketInfo.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/HistoryLaunch/index.js";




const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  responsive: true
};

const HistoryLaunch = () => {
  const {
    0: rocket,
    1: setRocket
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rocketName,
    1: setRocketName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rocketSucces,
    1: setRocketSucces
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getRocketInfo__WEBPACK_IMPORTED_MODULE_4__["default"])().then(data => {
      setRocket(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const name = rocket.map(item => {
      return item.name;
    });
    const succes = rocket.map(item => {
      return item.success_rate_pct;
    });
    setRocketName(name);
    setRocketSucces(succes);
  }, [rocket]);
  const data = {
    labels: rocketName,
    datasets: [{
      label: "percent",
      data: rocketSucces,
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: "Rockets succes rate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
        data: data,
        options: options
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HistoryLaunch);

/***/ }),

/***/ "./components/HistoryLaunch/styles.js":
/*!********************************************!*\
  !*** ./components/HistoryLaunch/styles.js ***!
  \********************************************/
/*! exports provided: Section, Title, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__Section",
  componentId: "sc-1jtehm9-0"
})(["width:80%;margin:0 auto;margin-top:60px;margin-bottom:40px;border:1px solid ", ";"], ({
  theme
}) => theme.text);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1jtehm9-1"
})(["background-color:", ";color:", ";padding:20px 0;font-size:36px;text-transform:uppercase;font-weight:600;margin:0;text-align:center;"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.body);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1jtehm9-2"
})(["text-align:center;padding:40px;"]);

/***/ }),

/***/ "./components/StatCard/index.js":
/*!**************************************!*\
  !*** ./components/StatCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/StatCard/styles.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/StatCard/index.js";




const StatCard = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: props.title || "titulo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
        data: props.items,
        width: 544,
        height: 518,
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            position: "bottom",
            responsive: true
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StatCard);

/***/ }),

/***/ "./components/StatCard/styles.js":
/*!***************************************!*\
  !*** ./components/StatCard/styles.js ***!
  \***************************************/
/*! exports provided: Section, Title, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__Section",
  componentId: "sc-1xa8kjl-0"
})(["margin-bottom:40px;border:1px solid ", ";padding:40px 50px;box-sizing:border-box;;"], ({
  theme
}) => theme.text);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1xa8kjl-1"
})(["margin:0;font-size:28px;text-transform:uppercase;max-width:300px;text-align:center;@media (min-width:768px){font-size:48px;margin:0 auto;}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1xa8kjl-2"
})(["text-align:center;padding-top:50px;"]);

/***/ }),

/***/ "./pages/stats/index.js":
/*!******************************!*\
  !*** ./pages/stats/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Banner */ "./components/Banner/index.js");
/* harmony import */ var _components_HistoryLaunch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HistoryLaunch */ "./components/HistoryLaunch/index.js");
/* harmony import */ var _components_GridStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GridStats */ "./components/GridStats/index.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/pages/stats/index.js";





const StatsPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "stats",
      backImage: "/images/stats.jpeg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HistoryLaunch__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GridStats__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StatsPage);

/***/ }),

/***/ "./services/getPastLaunchesNP.js":
/*!***************************************!*\
  !*** ./services/getPastLaunchesNP.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllpastLaunches; });
async function getAllpastLaunches(page) {
  const API = `https://api.spacexdata.com/v4/launches/past/`;
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

/***/ }),

/***/ "./services/getPayload.js":
/*!********************************!*\
  !*** ./services/getPayload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDragonsInfo; });
const API = "https://api.spacexdata.com/v4/payloads";
async function getDragonsInfo() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

/***/ }),

/***/ "./services/getRocketInfo.js":
/*!***********************************!*\
  !*** ./services/getRocketInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRocketInfo; });
const API = "https://api.spacexdata.com/v4/rockets";
async function getRocketInfo() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZFN0YXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZFN0YXRzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXVuY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IaXN0b3J5TGF1bmNoL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhdENhcmQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0YXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dldFBheWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2V0Um9ja2V0SW5mby5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJ1cmdlci1tZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJwcm9wcyIsImJhY2tJbWFnZSIsInRpdGxlIiwiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJHcmlkU3RhdHMiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInVzZVN0YXRlIiwic3VjY2VzIiwic2V0c3VjY2VzIiwiZmFpbCIsInNldGZhaWwiLCJjdXN0b21lciIsInNldGN1c3RvbWVyIiwiY3VzdG9tZXJOYW1lIiwic2V0Y3VzdG9tZXJOYW1lIiwiY3VzdG9tZXJMYXVuY2hlcyIsInNldGN1c3RvbWVyTGF1bmNoZXMiLCJ1c2VFZmZlY3QiLCJnZXRQYXN0TGF1bmNoZXMiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc2xhdW5jaCIsImZpbHRlciIsIml0ZW0iLCJzdWNjZXNzIiwiZmFpbGxhdW5jaCIsImxlbmd0aCIsImRhdGFTdWNjZXMiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImdldFBheWxvYWQiLCJuYW1lIiwibWFwIiwiY3VzdG9tZXJzIiwidW5pY29zIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmlyc3QiLCJzbGljZSIsInJlc3VsdCIsImkiLCJlbGVtZW50IiwidG90YWwiLCJpbmNsdWRlcyIsInB1c2giLCJkYXRhQ3VzdG9tZXIiLCJHcmlkIiwiZGl2Iiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInJlc3BvbnNpdmUiLCJIaXN0b3J5TGF1bmNoIiwicm9ja2V0Iiwic2V0Um9ja2V0Iiwicm9ja2V0TmFtZSIsInNldFJvY2tldE5hbWUiLCJyb2NrZXRTdWNjZXMiLCJzZXRSb2NrZXRTdWNjZXMiLCJnZXRSb2NrZXRJbmZvIiwic3VjY2Vzc19yYXRlX3BjdCIsInRoZW1lIiwidGV4dCIsIlRpdGxlIiwiaDIiLCJib2R5IiwiQ29udGFpbmVyIiwiU3RhdENhcmQiLCJpdGVtcyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJsZWdlbmQiLCJwb3NpdGlvbiIsIlN0YXRzUGFnZSIsImdldEFsbHBhc3RMYXVuY2hlcyIsInBhZ2UiLCJBUEkiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImdldERyYWdvbnNJbmZv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QUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUExQjtBQUNBLE1BQUk5RCxJQUFJLEdBQUcsTUFBTStELFFBQVEsQ0FBQ0UsSUFBVCxFQUFqQjtBQUNBLFNBQU9qRSxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNORCxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc3RhdHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgQmFubmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gYmFja0ltYWdlPXtwcm9wcy5iYWNrSW1hZ2V9PlxuICAgICAgPGgxPiB7cHJvcHMudGl0bGV9PC9oMT5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5iYWNrSW1hZ2UgfHwgXCIvaW1hZ2VzL3JvY2tldC5qcGdcIn0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAmIGgxIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcbiAgXG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VjY2VzLCBzZXRzdWNjZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWlsLCBzZXRmYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldGN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXN0b21lckxhdW5jaGVzLCBzZXRjdXN0b21lckxhdW5jaGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBsYXVuY2ggc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aCk7XG4gICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aCk7XG4gIH0sIFtkcmFnb25JbmZvXSk7XG5cbiAgICBjb25zdCBkYXRhU3VjY2VzID0ge1xuICAgICAgbGFiZWxzOiBbXCJGQUlMXCIsIFwiU1VDQ0VTU1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICAgZGF0YTogW2ZhaWwsIHN1Y2Nlc10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGN1c3RvbWVyIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGF5bG9hZCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGN1c3RvbWVyKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBuYW1lPSBjdXN0b21lci5tYXAoKGl0ZW0pPT57XG4gICAgICByZXR1cm4gaXRlbS5jdXN0b21lcnNbMF07XG4gICAgfSlcbiAgICBsZXQgdW5pY29zID0gQXJyYXkuZnJvbShuZXcgU2V0KG5hbWUpKTtcbiAgICBsZXQgZmlyc3Q9IHVuaWNvcy5zbGljZSgwLDUpXG4gICAgc2V0Y3VzdG9tZXJOYW1lKGZpcnN0KTtcbiAgfSxbY3VzdG9tZXJdKVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgcmVzdWx0PVtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21lck5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtZW50ID0gY3VzdG9tZXIuZmlsdGVyKChpdGVtKT0+e1xuICAgICAgICBjb25zdCB0b3RhbCA9IGl0ZW0uY3VzdG9tZXJzLmluY2x1ZGVzKGN1c3RvbWVyTmFtZVtpXSk7XG4gICAgICAgIHJldHVybiB0b3RhbFxuICAgICAgfSlcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQubGVuZ3RoKVxuICAgIH1cbiAgICBzZXRjdXN0b21lckxhdW5jaGVzKHJlc3VsdClcbiAgICBcbiAgfSxbY3VzdG9tZXJOYW1lXSlcblxuICBjb25zdCBkYXRhQ3VzdG9tZXIgPSB7XG4gICAgbGFiZWxzOiBjdXN0b21lck5hbWUsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTogY3VzdG9tZXJMYXVuY2hlcyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJsYXVuY2ggc3RhdHNcIiBpdGVtcz17ZGF0YVN1Y2Nlc30gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImNvbW1lcmNpYWwgQ3VzdG9tZXJzXCIgaXRlbXM9e2RhdGFDdXN0b21lcn0gLz5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhdHM7XG5cblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICYgPiBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiA0OCU7XG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlY3Rpb24sIFRpdGxlLCBDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBnZXRSb2NrZXRJbmZvIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRSb2NrZXRJbmZvXCI7XG5cblxuXG5jb25zdCBvcHRpb25zID0ge1xuICBzY2FsZXM6IHtcbiAgICB5QXhlczogW1xuICAgICAge1xuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICByZXNwb25zaXZlOnRydWVcbn07XG5cbmNvbnN0IEhpc3RvcnlMYXVuY2ggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcm9ja2V0LCBzZXRSb2NrZXRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyb2NrZXROYW1lLCBzZXRSb2NrZXROYW1lXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcm9ja2V0U3VjY2VzLCBzZXRSb2NrZXRTdWNjZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgZ2V0Um9ja2V0SW5mbygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgIHNldFJvY2tldChkYXRhKTtcbiAgICAgICB9KTtcbiAgICAgfSwgW10pO1xuXG4gICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3QgbmFtZSA9IHJvY2tldC5tYXAoKGl0ZW0pPT57XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWVcbiAgICAgIH0pXG4gICAgICBjb25zdCBzdWNjZXMgPSByb2NrZXQubWFwKChpdGVtKT0+e1xuICAgICAgICByZXR1cm4gaXRlbS5zdWNjZXNzX3JhdGVfcGN0O1xuICAgICAgfSlcbiAgICAgIHNldFJvY2tldE5hbWUobmFtZSlcbiAgICAgIHNldFJvY2tldFN1Y2NlcyhzdWNjZXMpXG4gICAgIH0sW3JvY2tldF0pXG5cblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IHJvY2tldE5hbWUsXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicGVyY2VudFwiLFxuICAgICAgICAgIGRhdGE6IHJvY2tldFN1Y2NlcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcbiAgICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxUaXRsZT5Sb2NrZXRzIHN1Y2NlcyByYXRlPC9UaXRsZT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCYXIgZGF0YT17ZGF0YX0gIG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5TGF1bmNoOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgcGFkZGluZzo0MHB4O1xuYDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTZWN0aW9uLCBUaXRsZSwgQ29udGFpbmVyfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5cblxuXG5jb25zdCBTdGF0Q2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPFRpdGxlPntwcm9wcy50aXRsZSB8fCBcInRpdHVsb1wifTwvVGl0bGU+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICBkYXRhPXtwcm9wcy5pdGVtc31cbiAgICAgICAgICB3aWR0aD17NTQ0fVxuICAgICAgICAgIGhlaWdodD17NTE4fVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0Q2FyZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBwYWRkaW5nOiA0MHB4IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IDtcbmA7XG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIHBhZGRpbmctdG9wOjUwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYW5uZXJcIjtcbmltcG9ydCBIaXN0b3J5TGF1bmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hpc3RvcnlMYXVuY2hcIjtcbmltcG9ydCBHcmlkU3RhdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFN0YXRzXCI7XG5cbmNvbnN0IFN0YXRzUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJhbm5lciB0aXRsZT17XCJzdGF0c1wifSBiYWNrSW1hZ2U9XCIvaW1hZ2VzL3N0YXRzLmpwZWdcIiAvPlxuICAgICAgPEhpc3RvcnlMYXVuY2ggLz5cbiAgICAgIDxHcmlkU3RhdHMgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzUGFnZTtcbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbHBhc3RMYXVuY2hlcyhwYWdlKSB7XG4gIGNvbnN0IEFQSSA9IGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9sYXVuY2hlcy9wYXN0L2A7XG5cbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiY29uc3QgQVBJID0gXCJodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9wYXlsb2Fkc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldERyYWdvbnNJbmZvKCkge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUEkpO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJjb25zdCBBUEkgPSBcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L3JvY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Um9ja2V0SW5mbygpIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYnVyZ2VyLW1lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9