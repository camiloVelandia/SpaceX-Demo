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
  console.log(customer);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var name = customer.map(function (item) {
      item.customer[0];
    }); // setcustomerName(name)
  }, [customer]);
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
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "J0CieGQRBv97m37sT/x/z2V7AtI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWFwIiwiZGF0YUN1c3RvbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBR2NDLHNEQUFRLENBQUMsRUFBRCxDQUh0QjtBQUFBLE1BR2ZDLFVBSGU7QUFBQSxNQUdIQyxhQUhHOztBQUFBLG1CQUlNRixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZHLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQUFBLG1CQUtFSixzREFBUSxDQUFDLEVBQUQsQ0FMVjtBQUFBLE1BS2ZLLElBTGU7QUFBQSxNQUtUQyxPQUxTOztBQUFBLG1CQU9VTixzREFBUSxDQUFDLEVBQUQsQ0FQbEI7QUFBQSxNQU9mTyxRQVBlO0FBQUEsTUFPTEMsV0FQSzs7QUFBQSxtQkFRa0JSLHNEQUFRLENBQUMsRUFBRCxDQVIxQjtBQUFBLE1BUWZT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MjhiMzNlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QXCI7XG5pbXBvcnQgZ2V0UGF5bG9hZCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGF5bG9hZFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuICBcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICBjb25zdCBbY3VzdG9tZXIsIHNldGN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Y3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBsYXVuY2ggc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhaXRlbS5zdWNjZXNzO1xuICAgIH0pO1xuICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aCk7XG4gICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aCk7XG4gIH0sIFtkcmFnb25JbmZvXSk7XG5cbiAgICBjb25zdCBkYXRhU3VjY2VzID0ge1xuICAgICAgbGFiZWxzOiBbXCJmYWlsXCIsIFwic3VjY2VzXCJdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgICBkYXRhOiBbZmFpbCwgc3VjY2VzXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIl0sXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgY3VzdG9tZXIgc3RhdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYXlsb2FkKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0Y3VzdG9tZXIoZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coY3VzdG9tZXIpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgbmFtZT0gY3VzdG9tZXIubWFwKChpdGVtKT0+e1xuICAgICAgaXRlbS5jdXN0b21lclswXVxuICAgIH0pXG4gICAgLy8gc2V0Y3VzdG9tZXJOYW1lKG5hbWUpXG4gIH0sW2N1c3RvbWVyXSlcblxuICBjb25zdCBkYXRhQ3VzdG9tZXIgPSB7XG4gICAgbGFiZWxzOiBbXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZD5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImxhdW5jaCBzdGF0c1wiIGl0ZW1zPXtkYXRhU3VjY2VzfSAvPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwiY29tbWVyY2lhbCBDdXN0b21lcnNcIiBpdGVtcz17ZGF0YUN1c3RvbWVyfSAvPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTdGF0cztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==