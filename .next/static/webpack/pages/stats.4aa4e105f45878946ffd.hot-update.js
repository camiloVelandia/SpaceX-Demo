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
      item.customers[0];
    });
    setcustomerName(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWFwIiwiY3VzdG9tZXJzIiwiZGF0YUN1c3RvbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBR2NDLHNEQUFRLENBQUMsRUFBRCxDQUh0QjtBQUFBLE1BR2ZDLFVBSGU7QUFBQSxNQUdIQyxhQUhHOztBQUFBLG1CQUlNRixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZHLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQUFBLG1CQUtFSixzREFBUSxDQUFDLEVBQUQsQ0FMVjtBQUFBLE1BS2ZLLElBTGU7QUFBQSxNQUtUQyxPQUxTOztBQUFBLG1CQU9VTixzREFBUSxDQUFDLEVBQUQsQ0FQbEI7QUFBQSxNQU9mTyxRQVBlO0FBQUEsTUFPTEMsV0FQSzs7QUFBQSxtQkFRa0JSLHNEQUFRLENBQUMsRUFBRCxDQVIx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L3dlYnBhY2svcGFnZXMvc3RhdHMuNGFhNGUxMDVmNDU4Nzg5NDZmZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcbiAgXG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VjY2VzLCBzZXRzdWNjZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWlsLCBzZXRmYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldGN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgbGF1bmNoIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0ZHJhZ29uSW5mbyhkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc2xhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gIWl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBjb25zdCBmYWlsbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgc2V0c3VjY2VzKHN1Y2Nlc2xhdW5jaC5sZW5ndGgpO1xuICAgIHNldGZhaWwoZmFpbGxhdW5jaC5sZW5ndGgpO1xuICB9LCBbZHJhZ29uSW5mb10pO1xuXG4gICAgY29uc3QgZGF0YVN1Y2NlcyA9IHtcbiAgICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICAgZGF0YTogW2ZhaWwsIHN1Y2Nlc10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGN1c3RvbWVyIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGF5bG9hZCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGN1c3RvbWVyKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKGN1c3RvbWVyKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IG5hbWU9IGN1c3RvbWVyLm1hcCgoaXRlbSk9PntcbiAgICAgIGl0ZW0uY3VzdG9tZXJzWzBdO1xuICAgIH0pXG4gICAgc2V0Y3VzdG9tZXJOYW1lKG5hbWUpXG4gIH0sW2N1c3RvbWVyXSlcblxuICBjb25zdCBkYXRhQ3VzdG9tZXIgPSB7XG4gICAgbGFiZWxzOiBbXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZD5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImxhdW5jaCBzdGF0c1wiIGl0ZW1zPXtkYXRhU3VjY2VzfSAvPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwiY29tbWVyY2lhbCBDdXN0b21lcnNcIiBpdGVtcz17ZGF0YUN1c3RvbWVyfSAvPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTdGF0cztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==