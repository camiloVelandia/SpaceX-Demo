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
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // bring the data for launch stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(data => {
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
    labels: ["fail", "succes"],
    datasets: [{
      label: "# of Votes",
      data: [fail, succes],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  }; // bring the data for customer stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_3__["default"])().then(data => {
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
    const darpa = customer.filter(item => {
      const total = item.customers.includes(customerName[5]);
      return total;
      console.log(total.length); // console.log(customerName[0]); 
    }); // const darpa= customer.filter((item)=>{
    //    console.log(item.customers.includes('DARPA')); 
    // })

    console.log(darpa.length);
  }, [customerName]);
  const dataCustomer = {
    labels: customerName,
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/HistoryLaunch/index.js";



const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: "# of Votes",
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
    borderWidth: 1
  }]
};
const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const HistoryLaunch = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: "Starship - Hop Tests"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
        data: data,
        options: options
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
        data: props.items
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZFN0YXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZFN0YXRzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXVuY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IaXN0b3J5TGF1bmNoL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhdENhcmQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0YXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dldFBheWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkJhbm5lciIsInByb3BzIiwiYmFja0ltYWdlIiwidGl0bGUiLCJTZWN0aW9uIiwic3R5bGVkIiwic2VjdGlvbiIsIkdyaWRTdGF0cyIsImRyYWdvbkluZm8iLCJzZXRkcmFnb25JbmZvIiwidXNlU3RhdGUiLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsImN1c3RvbWVyIiwic2V0Y3VzdG9tZXIiLCJjdXN0b21lck5hbWUiLCJzZXRjdXN0b21lck5hbWUiLCJ1c2VFZmZlY3QiLCJnZXRQYXN0TGF1bmNoZXMiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc2xhdW5jaCIsImZpbHRlciIsIml0ZW0iLCJzdWNjZXNzIiwiZmFpbGxhdW5jaCIsImxlbmd0aCIsImRhdGFTdWNjZXMiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImdldFBheWxvYWQiLCJuYW1lIiwibWFwIiwiY3VzdG9tZXJzIiwidW5pY29zIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmlyc3QiLCJzbGljZSIsImRhcnBhIiwidG90YWwiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhQ3VzdG9tZXIiLCJHcmlkIiwiZGl2Iiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsIkhpc3RvcnlMYXVuY2giLCJ0aGVtZSIsInRleHQiLCJUaXRsZSIsImgyIiwiYm9keSIsIkNvbnRhaW5lciIsIlN0YXRDYXJkIiwiaXRlbXMiLCJTdGF0c1BhZ2UiLCJnZXRBbGxwYXN0TGF1bmNoZXMiLCJwYWdlIiwiQVBJIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnZXREcmFnb25zSW5mbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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QXdCLGVBQVMsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJEOztBQVVlQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQWUsZUFBZUMsa0JBQWYsQ0FBa0NDLElBQWxDLEVBQXdDO0FBQ3JELFFBQU1DLEdBQUcsR0FBSSw4Q0FBYjtBQUVBLE1BQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBMUI7QUFDQSxNQUFJakQsSUFBSSxHQUFHLE1BQU1rRCxRQUFRLENBQUNFLElBQVQsRUFBakI7QUFDQSxTQUFPcEQsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQSxNQUFNaUQsR0FBRyxHQUFHLHdDQUFaO0FBR2UsZUFBZUksY0FBZixHQUFnQztBQUM3QyxNQUFJSCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTFCO0FBQ0EsTUFBSWpELElBQUksR0FBRyxNQUFNa0QsUUFBUSxDQUFDRSxJQUFULEVBQWpCO0FBQ0EsU0FBT3BELElBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ1BELGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3N0YXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zdGF0cy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBCYW5uZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBiYWNrSW1hZ2U9e3Byb3BzLmJhY2tJbWFnZX0+XG4gICAgICA8aDE+IHtwcm9wcy50aXRsZX08L2gxPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBoZWlnaHQ6IDQwdmg7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmJhY2tJbWFnZSB8fCBcIi9pbWFnZXMvcm9ja2V0LmpwZ1wifSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gICYgaDEge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QXCI7XG5pbXBvcnQgZ2V0UGF5bG9hZCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGF5bG9hZFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuICBcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICBjb25zdCBbY3VzdG9tZXIsIHNldGN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Y3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBsYXVuY2ggc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aCk7XG4gICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aCk7XG4gIH0sIFtkcmFnb25JbmZvXSk7XG5cbiAgICBjb25zdCBkYXRhU3VjY2VzID0ge1xuICAgICAgbGFiZWxzOiBbXCJmYWlsXCIsIFwic3VjY2VzXCJdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgICBkYXRhOiBbZmFpbCwgc3VjY2VzXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIl0sXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgY3VzdG9tZXIgc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXlsb2FkKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0Y3VzdG9tZXIoZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IG5hbWU9IGN1c3RvbWVyLm1hcCgoaXRlbSk9PntcbiAgICAgIHJldHVybiBpdGVtLmN1c3RvbWVyc1swXTtcbiAgICB9KVxuICAgIGxldCB1bmljb3MgPSBBcnJheS5mcm9tKG5ldyBTZXQobmFtZSkpO1xuICAgIGxldCBmaXJzdD0gdW5pY29zLnNsaWNlKDAsNSlcbiAgICBzZXRjdXN0b21lck5hbWUoZmlyc3QpO1xuICB9LFtjdXN0b21lcl0pXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBkYXJwYT0gY3VzdG9tZXIuZmlsdGVyKChpdGVtKT0+e1xuICAgICAgY29uc3QgdG90YWwgPSBpdGVtLmN1c3RvbWVycy5pbmNsdWRlcyhjdXN0b21lck5hbWVbNV0pO1xuICAgICAgcmV0dXJuIHRvdGFsXG4gICAgICBjb25zb2xlLmxvZyh0b3RhbC5sZW5ndGgpIFxuICAgICAgLy8gY29uc29sZS5sb2coY3VzdG9tZXJOYW1lWzBdKTsgXG4gICAgfSlcbiAgICAvLyBjb25zdCBkYXJwYT0gY3VzdG9tZXIuZmlsdGVyKChpdGVtKT0+e1xuICAgIC8vICAgIGNvbnNvbGUubG9nKGl0ZW0uY3VzdG9tZXJzLmluY2x1ZGVzKCdEQVJQQScpKTsgXG4gICAgLy8gfSlcbiAgICBjb25zb2xlLmxvZyhkYXJwYS5sZW5ndGgpXG4gICAgXG4gIH0sW2N1c3RvbWVyTmFtZV0pXG5cbiAgY29uc3QgZGF0YUN1c3RvbWVyID0ge1xuICAgIGxhYmVsczogY3VzdG9tZXJOYW1lLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJjb21tZXJjaWFsIEN1c3RvbWVyc1wiIGl0ZW1zPXtkYXRhQ3VzdG9tZXJ9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJiA+IHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgVGl0bGUsIENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJHcmVlblwiLCBcIlB1cnBsZVwiLCBcIk9yYW5nZVwiXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1LCAyLCAzXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gICAgICAgIFwicmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpXCIsXG4gICAgICAgIFwicmdiYSgyNTUsIDE1OSwgNjQsIDAuMilcIixcbiAgICAgIF0sXG4gICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMSlcIixcbiAgICAgICAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMSlcIixcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2NhbGVzOiB7XG4gICAgeUF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IEhpc3RvcnlMYXVuY2ggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8VGl0bGU+U3RhcnNoaXAgLSBIb3AgVGVzdHM8L1RpdGxlPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxhdW5jaDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9keX07XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIHBhZGRpbmc6NDBweDtcbmA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2VjdGlvbiwgVGl0bGUsIENvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuXG5cblxuY29uc3QgU3RhdENhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxUaXRsZT57cHJvcHMudGl0bGUgfHwgXCJ0aXR1bG9cIn08L1RpdGxlPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPERvdWdobnV0IGRhdGE9e3Byb3BzLml0ZW1zfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdENhcmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgcGFkZGluZzogNDBweCA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyA7XG5gO1xuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBwYWRkaW5nLXRvcDo1MHB4O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgSGlzdG9yeUxhdW5jaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IaXN0b3J5TGF1bmNoXCI7XG5pbXBvcnQgR3JpZFN0YXRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWRTdGF0c1wiO1xuXG5jb25zdCBTdGF0c1BhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCYW5uZXIgdGl0bGU9e1wic3RhdHNcIn0gYmFja0ltYWdlPVwiL2ltYWdlcy9zdGF0cy5qcGVnXCIgLz5cbiAgICAgIDxIaXN0b3J5TGF1bmNoIC8+XG4gICAgICA8R3JpZFN0YXRzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRBbGxwYXN0TGF1bmNoZXMocGFnZSkge1xuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvbGF1bmNoZXMvcGFzdC9gO1xuXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSk7XG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImNvbnN0IEFQSSA9IFwiaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvcGF5bG9hZHNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXREcmFnb25zSW5mbygpIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9