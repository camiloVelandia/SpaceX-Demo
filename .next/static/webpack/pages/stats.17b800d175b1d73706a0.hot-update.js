webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var GridStats = function GridStats() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragonInfo = _useState[0],
      setdragonInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      succes = _useState2[0],
      setsucces = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      fail = _useState3[0],
      setfail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customer = _useState4[0],
      setcustomer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customerName = _useState5[0],
      setcustomerName = _useState5[1]; // bring the data for launch stats


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var succeslaunch = dragonInfo.filter(function (item) {
      return !item.success;
    });
    var faillaunch = dragonInfo.filter(function (item) {
      return item.success;
    });
    setsucces(succeslaunch.length);
    setfail(faillaunch.length);
  }, [dragonInfo]);
  var dataSucces = {
    labels: ["fail", "succes"],
    datasets: [{
      label: "# of Votes",
      data: [fail, succes],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  }; // bring the data for customer stats

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setcustomer(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var name = customer.map(function (item) {
      return item.customers[0];
    });
    var unicos = Array.from(new Set(name));
    var first = unicos.slice(0, 5);
    setcustomerName(first);
  }, [customer]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var darpa = customer.filter(function (item) {
      var total = item.customers.includes("".concat(customerName[0]));
      console.log(total.length);
      console.log(customerName[0]);
    }); // const darpa= customer.filter((item)=>{
    //    console.log(item.customers.includes('DARPA')); 
    // })
  }, [customerName]);
  var dataCustomer = {
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
      lineNumber: 103,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "m4SFPtgMMTAKYUglS3WEfkBRHOA=");

_c = GridStats;
/* harmony default export */ __webpack_exports__["default"] = (GridStats);

var _c;

$RefreshReg$(_c, "GridStats");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsIm5hbWUiLCJtYXAiLCJjdXN0b21lcnMiLCJ1bmljb3MiLCJBcnJheSIsImZyb20iLCJTZXQiLCJmaXJzdCIsInNsaWNlIiwiZGFycGEiLCJ0b3RhbCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImRhdGFDdXN0b21lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUdjQyxzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdmQyxVQUhlO0FBQUEsTUFHSEMsYUFIRzs7QUFBQSxtQkFJTUYsc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlmRyxNQUplO0FBQUEsTUFJUEMsU0FKTzs7QUFBQSxtQkFLRUosc0RBQVEsQ0FBQyxFQUFELENBTFY7QUFBQSxNQUtmSyxJQUxlO0FBQUEsTUFLVEMsT0FMUzs7QUFBQSxtQkFPVU4sc0RBQVEsQ0FBQyxFQUFE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QURUO0FBRUVWLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FGUjtBQUdFVyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsQ0FIbkI7QUFTRUMsaUJBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBVGY7QUFlRUMsaUJBQVcsRUFBRTtBQWZmLEtBRFE7QUFGUyxHQUFyQjtBQXVCQSxzQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLGNBQWhCO0FBQStCLFdBQUssRUFBRU47QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsc0JBQWhCO0FBQXVDLFdBQUssRUFBRXNCO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBbEdEOztHQUFNNUMsUzs7S0FBQUEsUztBQW9HU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuMTdiODAwZDE3NWIxZDczNzA2YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcbiAgXG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VjY2VzLCBzZXRzdWNjZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWlsLCBzZXRmYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldGN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgbGF1bmNoIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0ZHJhZ29uSW5mbyhkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc2xhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gIWl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBjb25zdCBmYWlsbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgc2V0c3VjY2VzKHN1Y2Nlc2xhdW5jaC5sZW5ndGgpO1xuICAgIHNldGZhaWwoZmFpbGxhdW5jaC5sZW5ndGgpO1xuICB9LCBbZHJhZ29uSW5mb10pO1xuXG4gICAgY29uc3QgZGF0YVN1Y2NlcyA9IHtcbiAgICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICAgZGF0YTogW2ZhaWwsIHN1Y2Nlc10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGN1c3RvbWVyIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGF5bG9hZCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGN1c3RvbWVyKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBuYW1lPSBjdXN0b21lci5tYXAoKGl0ZW0pPT57XG4gICAgICByZXR1cm4gaXRlbS5jdXN0b21lcnNbMF07XG4gICAgfSlcbiAgICBsZXQgdW5pY29zID0gQXJyYXkuZnJvbShuZXcgU2V0KG5hbWUpKTtcbiAgICBsZXQgZmlyc3Q9IHVuaWNvcy5zbGljZSgwLDUpXG4gICAgc2V0Y3VzdG9tZXJOYW1lKGZpcnN0KTtcbiAgfSxbY3VzdG9tZXJdKVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgZGFycGE9IGN1c3RvbWVyLmZpbHRlcigoaXRlbSk9PntcbiAgICAgIGNvbnN0IHRvdGFsID0gaXRlbS5jdXN0b21lcnMuaW5jbHVkZXMoYCR7Y3VzdG9tZXJOYW1lWzBdfWApO1xuICAgICAgY29uc29sZS5sb2codG90YWwubGVuZ3RoKSBcbiAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyTmFtZVswXSk7IFxuICAgIH0pXG4gICAgLy8gY29uc3QgZGFycGE9IGN1c3RvbWVyLmZpbHRlcigoaXRlbSk9PntcbiAgICAvLyAgICBjb25zb2xlLmxvZyhpdGVtLmN1c3RvbWVycy5pbmNsdWRlcygnREFSUEEnKSk7IFxuICAgIC8vIH0pXG4gICAgXG4gIH0sW2N1c3RvbWVyTmFtZV0pXG5cbiAgY29uc3QgZGF0YUN1c3RvbWVyID0ge1xuICAgIGxhYmVsczogY3VzdG9tZXJOYW1lLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJjb21tZXJjaWFsIEN1c3RvbWVyc1wiIGl0ZW1zPXtkYXRhQ3VzdG9tZXJ9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9