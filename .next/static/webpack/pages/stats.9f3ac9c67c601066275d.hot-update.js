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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customer = _useState2[0],
      setcustomer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      succes = _useState3[0],
      setsucces = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      fail = _useState4[0],
      setfail = _useState4[1]; // bring the data for launch stats


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
  console.log(customer);
  var dataCustomer = {
    labels: [],
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
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "KqRPP/FMDWCiHwk1fRM5xbqvqro=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsImN1c3RvbWVyIiwic2V0Y3VzdG9tZXIiLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhQ3VzdG9tZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHZkMsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBQUEsbUJBSVVGLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSWZHLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtNSixzREFBUSxDQUFDLEVBQUQsQ0FMZDtBQUFBLE1BS2ZLLE1BTGU7QUFBQSxNQUtQQyxTQUxPOztBQUFBLG1CQU1FTixzREFBUSxDQUFDLEVBQUQsQ0FOVjtBQUFBLE1BTWZPLElBTmU7QUFBQSxNQU1UQyxPQU5TLGtCQVF0Qjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkQywrRUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0JWLG1CQUFhLENBQUNVLElBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FILHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1JLFlBQVksR0FBR1osVUFBVSxDQUFDYSxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMvQyxhQUFPLENBQUNBLElBQUksQ0FBQ0MsT0FBYjtBQUNELEtBRm9CLENBQXJCO0FBR0EsUUFBTUMsVUFBVSxHQUFHaEIsVUFBVSxDQUFDYSxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxhQUFPQSxJQUFJLENBQUNDLE9BQVo7QUFDRCxLQUZrQixDQUFuQjtBQUdBVixhQUFTLENBQUNPLFlBQVksQ0FBQ0ssTUFBZCxDQUFUO0FBQ0FWLFdBQU8sQ0FBQ1MsVUFBVSxDQUFDQyxNQUFaLENBQVA7QUFDRCxHQVRRLEVBU04sQ0FBQ2pCLFVBQUQsQ0FUTSxDQUFUO0FBV0UsTUFBTWtCLFVBQVUsR0FBRztBQUNqQkMsVUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FEUztBQUVqQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRVYsVUFBSSxFQUFFLENBQUNMLElBQUQsRUFBT0YsTUFBUCxDQUZSO0FBR0VrQixxQkFBZSxFQUFFLENBQUMseUJBQUQsRUFBNEIseUJBQTVCLENBSG5CO0FBSUVDLGlCQUFXLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQix1QkFBMUIsQ0FKZjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FEUTtBQUZPLEdBQW5CLENBekJvQixDQXNDdEI7O0FBQ0FoQix5REFBUyxDQUFDLFlBQU07QUFDZGlCLHdFQUFVLEdBQUdmLElBQWIsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCUixpQkFBVyxDQUFDUSxJQUFELENBQVg7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBZSxTQUFPLENBQUNDLEdBQVIsQ0FBWXpCLFFBQVo7QUFHQSxNQUFNMEIsWUFBWSxHQUFHO0FBQ25CVCxVQUFNLEVBQUUsRUFEVztBQUVuQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRVYsVUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixDQUZSO0FBR0VXLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLEVBR2YseUJBSGUsRUFJZix5QkFKZSxDQUhuQjtBQVNFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsQ0FUZjtBQWVFQyxpQkFBVyxFQUFFO0FBZmYsS0FEUTtBQUZTLEdBQXJCO0FBdUJBLHNCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsY0FBaEI7QUFBK0IsV0FBSyxFQUFFTjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxzQkFBaEI7QUFBdUMsV0FBSyxFQUFFVTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTVFRDs7R0FBTTlCLFM7O0tBQUFBLFM7QUE4RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjlmM2FjOWM2N2M2MDEwNjYyNzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzTlBcIjtcbmltcG9ydCBnZXRQYXlsb2FkIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXlsb2FkXCI7XG5cbmltcG9ydCBTdGF0Q2FyZCBmcm9tIFwiLi4vU3RhdENhcmRcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBHcmlkU3RhdHMgPSAoKSA9PiB7XG4gIFxuXG4gIGNvbnN0IFtkcmFnb25JbmZvLCBzZXRkcmFnb25JbmZvXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGxhdW5jaCBzdGF0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBhc3RMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGRyYWdvbkluZm8oZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWNjZXNsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFpdGVtLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgY29uc3QgZmFpbGxhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIHNldHN1Y2NlcyhzdWNjZXNsYXVuY2gubGVuZ3RoKTtcbiAgICBzZXRmYWlsKGZhaWxsYXVuY2gubGVuZ3RoKTtcbiAgfSwgW2RyYWdvbkluZm9dKTtcblxuICAgIGNvbnN0IGRhdGFTdWNjZXMgPSB7XG4gICAgICBsYWJlbHM6IFtcImZhaWxcIiwgXCJzdWNjZXNcIl0sXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICAgIGRhdGE6IFtmYWlsLCBzdWNjZXNdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiXSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogW1wicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCJdLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBjdXN0b21lciBzdGF0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBheWxvYWQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRjdXN0b21lcihkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhjdXN0b21lcilcblxuICBcbiAgY29uc3QgZGF0YUN1c3RvbWVyID0ge1xuICAgIGxhYmVsczogW10sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJsYXVuY2ggc3RhdHNcIiBpdGVtcz17ZGF0YVN1Y2Nlc30gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImNvbW1lcmNpYWwgQ3VzdG9tZXJzXCIgaXRlbXM9e2RhdGFDdXN0b21lcn0gLz5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhdHM7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=