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
      console.log(item.customers.includes(customerName[3]));
    }); // const darpa= customer.filter((item)=>{
    //    console.log(item.customers.includes('DARPA')); 
    // })
  }, [customer]);
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
      lineNumber: 101,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsIm5hbWUiLCJtYXAiLCJjdXN0b21lcnMiLCJ1bmljb3MiLCJBcnJheSIsImZyb20iLCJTZXQiLCJmaXJzdCIsInNsaWNlIiwiZGFycGEiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJkYXRhQ3VzdG9tZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHZkMsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBQUEsbUJBSU1GLHNEQUFRLENBQUMsRUFBRCxDQUpkO0FBQUEsTUFJZkcsTUFKZTtBQUFBLE1BSVBDLFNBSk87O0FBQUEsbUJBS0VKLHNEQUFRLENBQUMsRUFBRCxDQUxWO0FBQUEsTUFLZkssSUFMZTtBQUFBLE1BS1RDLE9BTFM7O0FBQUEsbUJBT1VOLHNEQUFRLENBQUMsRUFBRCxDQVBsQjtB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QUZlLEVBR2YseUJBSGUsRUFJZix5QkFKZSxDQUhuQjtBQVNFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsQ0FUZjtBQWVFQyxpQkFBVyxFQUFFO0FBZmYsS0FEUTtBQUZTLEdBQXJCO0FBdUJBLHNCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsY0FBaEI7QUFBK0IsV0FBSyxFQUFFTjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxzQkFBaEI7QUFBdUMsV0FBSyxFQUFFcUI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FoR0Q7O0dBQU0zQyxTOztLQUFBQSxTO0FBa0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0cy42ZjEyOTU3MDVmOTViMDhmYjk0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QXCI7XG5pbXBvcnQgZ2V0UGF5bG9hZCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGF5bG9hZFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuICBcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICBjb25zdCBbY3VzdG9tZXIsIHNldGN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Y3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBsYXVuY2ggc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aCk7XG4gICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aCk7XG4gIH0sIFtkcmFnb25JbmZvXSk7XG5cbiAgICBjb25zdCBkYXRhU3VjY2VzID0ge1xuICAgICAgbGFiZWxzOiBbXCJmYWlsXCIsIFwic3VjY2VzXCJdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgICBkYXRhOiBbZmFpbCwgc3VjY2VzXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIl0sXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgY3VzdG9tZXIgc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXlsb2FkKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0Y3VzdG9tZXIoZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IG5hbWU9IGN1c3RvbWVyLm1hcCgoaXRlbSk9PntcbiAgICAgIHJldHVybiBpdGVtLmN1c3RvbWVyc1swXTtcbiAgICB9KVxuICAgIGxldCB1bmljb3MgPSBBcnJheS5mcm9tKG5ldyBTZXQobmFtZSkpO1xuICAgIGxldCBmaXJzdD0gdW5pY29zLnNsaWNlKDAsNSlcbiAgICBzZXRjdXN0b21lck5hbWUoZmlyc3QpO1xuICB9LFtjdXN0b21lcl0pXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBkYXJwYT0gY3VzdG9tZXIuZmlsdGVyKChpdGVtKT0+e1xuICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uY3VzdG9tZXJzLmluY2x1ZGVzKGN1c3RvbWVyTmFtZVszXSkpOyBcbiAgICB9KVxuICAgIC8vIGNvbnN0IGRhcnBhPSBjdXN0b21lci5maWx0ZXIoKGl0ZW0pPT57XG4gICAgLy8gICAgY29uc29sZS5sb2coaXRlbS5jdXN0b21lcnMuaW5jbHVkZXMoJ0RBUlBBJykpOyBcbiAgICAvLyB9KVxuICAgIFxuICB9LFtjdXN0b21lcl0pXG5cbiAgY29uc3QgZGF0YUN1c3RvbWVyID0ge1xuICAgIGxhYmVsczogY3VzdG9tZXJOYW1lLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJjb21tZXJjaWFsIEN1c3RvbWVyc1wiIGl0ZW1zPXtkYXRhQ3VzdG9tZXJ9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9